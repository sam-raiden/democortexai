import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Company, HistoryItem } from './types/company';
import { ChatMessage } from './types/chat';
import { mockHistory } from './data/mockCompanies';
import { mockResearchSteps } from './data/mockAnalysis';
import { getMockAIResponse } from './data/mockChat';
import { Topbar, Screen } from './components/layout/Topbar';
import { Home } from './pages/Home';
import { CompanyHeader } from './components/analysis/CompanyHeader';
import { AnalysisProgress } from './components/analysis/AnalysisProgress';
import { ReportPreview } from './components/reports/ReportPreview';
import { ChatWindow } from './components/chat/ChatWindow';
import { CompetitorAnalytics } from './pages/CompetitorAnalytics';

function App() {
  const [screen, setScreen] = useState<Screen>('landing');
  const [company, setCompany] = useState<Company>('NVIDIA');
  const [input, setInput] = useState('');
  const [isResearching, setIsResearching] = useState(false);
  const [researchStep, setResearchStep] = useState(0);
  const [reportReady, setReportReady] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState('');

  useEffect(() => {
    if (!isResearching) return undefined;
    const interval = window.setInterval(() => {
      setResearchStep((current) => {
        if (current >= mockResearchSteps.length - 1) {
          window.clearInterval(interval);
          window.setTimeout(() => {
            setIsResearching(false);
            setReportReady(true);
          }, 600);
          return current;
        }
        return current + 1;
      });
    }, 680);
    return () => window.clearInterval(interval);
  }, [isResearching]);

  const startAnalysis = (value: string) => {
    const normalized = value.trim();
    if (!normalized) return;
    const match = mockHistory.find((item) => item.name.toLowerCase() === normalized.toLowerCase());
    setCompany(match?.name ?? value.trim());
    setInput('');
    setScreen('intelligence');
    setReportReady(false);
    setResearchStep(0);
    setIsResearching(true);
    setChatMessages([]);
  };

  const openHistory = (item: HistoryItem) => {
    setCompany(item.name);
    setReportReady(true);
    setIsResearching(false);
    setChatMessages([]);
    setScreen('intelligence');
  };

  const openBlank = () => {
    setReportReady(false);
    setIsResearching(false);
    setResearchStep(0);
    setChatMessages([]);
    setScreen('intelligence');
  };

  const askQuestion = (overridePrompt?: string) => {
    const question = (overridePrompt ?? chatInput).trim();
    if (!question) return;

    const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      role: 'user',
      content: question,
      timestamp: timeString,
    };

    const assistantMsg: ChatMessage = {
      id: `assistant-${Date.now() + 1}-${Math.random().toString(36).slice(2, 7)}`,
      role: 'assistant',
      content: getMockAIResponse(company, question),
      timestamp: timeString,
    };

    setChatMessages((messages) => [...messages, userMsg, assistantMsg]);
    setChatInput('');
  };

  return (
    <div className="app-shell">
      {/* Landing only — it is 2400px tall, and on the short screens it was
          stretching the document's scroll height into blank space. */}
      {screen === 'landing' && <div className="app-atmosphere" aria-hidden="true" />}
      <Topbar
        screen={screen}
        onHome={() => setScreen('landing')}
        onNew={openBlank}
      />
      <AnimatePresence mode="wait">
        {screen === 'landing' && (
          <Home
            key="landing"
            input={input}
            setInput={setInput}
            onAnalyze={startAnalysis}
            onHistory={openHistory}
            onNew={openBlank}
          />
        )}
        {screen === 'intelligence' && (
          <motion.main
            key="intelligence"
            className="intelligence-page"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <CompanyHeader
              company={company}
              onBack={() => setScreen('landing')}
              onCompetitors={() => setScreen('competitors')}
            />
            {!reportReady && (
              <AnalysisProgress
                company={company}
                isResearching={isResearching}
                researchStep={researchStep}
                onAnalyze={startAnalysis}
              />
            )}
            {reportReady && (
              <>
                <ReportPreview company={company} />
                <ChatWindow
                  company={company}
                  messages={chatMessages}
                  input={chatInput}
                  setInput={setChatInput}
                  onAsk={askQuestion}
                />
              </>
            )}
          </motion.main>
        )}
        {screen === 'competitors' && (
          <CompetitorAnalytics
            key="competitors"
            company={company}
            onBack={() => setScreen('intelligence')}
          />
        )}
      </AnimatePresence>
    </div >
  );
}

export default App;
