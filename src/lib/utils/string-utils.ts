export const stringUtils = {
  /**
   * Truncates a string to a specified length and adds an ellipsis if truncated
   */
  truncate(str: string, length: number): string {
    if (str.length <= length) return str;
    return str.slice(0, length) + "...";
  },

  /**
   * Capitalizes the first letter of a string
   */
  capitalize(str: string): string {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  /**
   * Converts a string to title case (capitalizes first letter of each word)
   */
  toTitleCase(str: string): string {
    if (!str) return str;
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  },

  /**
   * Removes all whitespace from a string
   */
  removeWhitespace(str: string): string {
    return str.replace(/\s+/g, "");
  },

  /**
   * Checks if a string is empty or contains only whitespace
   */
  isEmpty(str: string): boolean {
    return !str || str.trim().length === 0;
  },

  /**
   * Generates a random string of specified length
   */
  generateRandomString(length: number): string {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  },

  /**
   * Converts a string to kebab case (e.g., "hello world" -> "hello-world")
   */
  toKebabCase(str: string): string {
    return str
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  },

  /**
   * Converts a string to camel case (e.g., "hello world" -> "helloWorld")
   */
  toCamelCase(str: string): string {
    return str
      .toLowerCase()
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");
  },

  /**
   * Checks if a string contains only alphanumeric characters
   */
  isAlphanumeric(str: string): boolean {
    return /^[a-zA-Z0-9]+$/.test(str);
  },

  /**
   * Counts the number of words in a string
   */
  wordCount(str: string): number {
    return str.trim().split(/\s+/).length;
  },
};
