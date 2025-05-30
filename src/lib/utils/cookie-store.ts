interface CookieOptions {
  expires?: Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: "strict" | "lax" | "none";
}

export const cookieStore = {
  /**
   * Set a cookie with the given name, value, and options
   */
  set(name: string, value: string, options: CookieOptions = {}): void {
    let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    if (options.expires) {
      cookie += `; expires=${options.expires.toUTCString()}`;
    }

    if (options.path) {
      cookie += `; path=${options.path}`;
    }

    if (options.domain) {
      cookie += `; domain=${options.domain}`;
    }

    if (options.secure) {
      cookie += "; secure";
    }

    if (options.sameSite) {
      cookie += `; samesite=${options.sameSite}`;
    }

    document.cookie = cookie;
  },

  /**
   * Get a cookie value by name
   */
  get(name: string): string | null {
    const cookies = document.cookie.split(";");
    const cookie = cookies.find((c) =>
      c.trim().startsWith(`${encodeURIComponent(name)}=`),
    );

    if (!cookie) {
      return null;
    }

    return decodeURIComponent(cookie.split("=")[1]);
  },

  /**
   * Remove a cookie by name
   */
  remove(name: string, options: CookieOptions = {}): void {
    this.set(name, "", {
      ...options,
      expires: new Date(0),
    });
  },

  /**
   * Check if a cookie exists
   */
  has(name: string): boolean {
    return this.get(name) !== null;
  },

  /**
   * Get all cookies as an object
   */
  getAll(): Record<string, string> {
    const cookies: Record<string, string> = {};
    document.cookie.split(";").forEach((cookie) => {
      const [name, value] = cookie.trim().split("=");
      if (name && value) {
        cookies[decodeURIComponent(name)] = decodeURIComponent(value);
      }
    });
    return cookies;
  },
};
