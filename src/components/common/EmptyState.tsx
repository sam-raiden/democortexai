import { Feather } from 'lucide-react';

export interface EmptyStateProps {
  message?: string;
  hint?: string;
}

export function EmptyState({
  message = 'Start with a name, website, or short description. 7thSense will map the business, market, signals, and competitive context.',
  hint = 'The clearer the question, the sharper the brief.',
}: EmptyStateProps) {
  return (
    <div className="empty-company-prompt">
      <p>{message}</p>
      {hint && (
        <div className="prompt-hint">
          <Feather size={15} /> {hint}
        </div>
      )}
    </div>
  );
}
