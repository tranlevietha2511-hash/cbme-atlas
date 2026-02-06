/**
 * Placeholder: implement your moderation standard here.
 * Return {allowed: boolean, reason?: string}
 */
export function moderateFeedbackText(text) {
  if (!text || text.trim().length < 3) {
    return { allowed: false, reason: "Text too short" };
  }
  return { allowed: true };
}
