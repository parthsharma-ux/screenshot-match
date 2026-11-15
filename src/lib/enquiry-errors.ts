const FALLBACK_MESSAGE = "Please check the form and try again.";

export function enquiryErrorMessage(detail: string): string {
  try {
    const parsed: unknown = JSON.parse(detail);
    const issues = Array.isArray(parsed)
      ? parsed
      : parsed !== null &&
          typeof parsed === "object" &&
          "issues" in parsed &&
          Array.isArray(parsed.issues)
        ? parsed.issues
        : [];

    const issue = issues.find(
      (candidate): candidate is { message: string } =>
        candidate !== null &&
        typeof candidate === "object" &&
        "message" in candidate &&
        typeof candidate.message === "string",
    );

    if (issue) return issue.message;
  } catch {
    // Ordinary server errors are displayed as-is below.
  }

  return detail || FALLBACK_MESSAGE;
}