export function formatJSON(json) {
  if (typeof json !== "string") {
    return json
  }

  let formatted = json.replace(/^```json\s*/i, "")
  formatted = formatted.replace(/\s*```\s*$/, "")
  formatted = formatted.trim()
  try {
    return JSON.parse(formatted)
  } catch (error) {
    return formatted
  }
}
