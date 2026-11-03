/**
 * Single place for reporting recoverable errors.
 * Today it only wraps console.error; it is the hook point for a future
 * monitoring service (Sentry, etc.) so call sites never need to change.
 */
export function logError(context: string, error: unknown): void {
    console.error(`[${context}]`, error instanceof Error ? error.message : error);
}
