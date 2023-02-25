import { Injectable } from '@angular/core';

/**
 * Type definition of a http header.
 */
type Headers = {
  [name: string]: string | string[];
};

/**
 * Service to register http headers to pass to the hawkcore api.
 */
@Injectable({
  providedIn: 'root',
})
export class HawkCoreHttpHeaderService {
  /**
   * The http headers where the object key is the header name and the value is the header value.
   */
  private headers: Headers = {};

  /**
   * Sets the value of the given header name.
   *
   * @param name The name of the header.
   * @param value The value of the header.
   */
  setHeader(name: string, value: string): void {
    this.headers[name] = value;
  }

  /**
   * Returns the headers to pass to the hawkcore api.
   */
  getHeaders(): Headers {
    return this.headers;
  }
}
