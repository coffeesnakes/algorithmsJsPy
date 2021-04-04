class RequestQueue {
  constructor() {
    /** Order of requests to execute. */
    this._order = [];
    /** Requests to execute once the current request finishes. */
    this._processQueue = [];
    /** Next request ID to assign. */
    this._requestId = 0;
    // Map of requests.
    this._requests = {};
    /** Whether a request is currently executing. */
    this._executing = false;
  }

  enqueue(request, onExecuted) {
    const requestId = this._getRequestId();

    this._requests[requestId] = { request, onExecuted };
    this._order.push({ requestId });

    return requestId;
  }

  cancel(requestId) {
    delete this._requests[requestId];
  }

  async processNext() {
    // If there are no requests left to process, do nothing.
    if (!this._order.length) {
      return;
    }

    const { requestId } = this._order.shift();
    const requestConfig = this._requests[requestId];

    // Check if request has been cancelled
    if (!requestConfig) {
      return;
    }

    // Check if a request is currently executing.
    // If so, enqueue this asynchronous request to run once
    // the current ongoing requests are resolved.
    if (this._executing) {
      this._processQueue.push(requestId);
      return;
    }

    this._executing = true;

    await this._handleRequest(requestConfig);

    // Empty process queue
    while (this._processQueue.length) {
      const queuedRequestId = this._processQueue.shift();
      const queuedRequestConfig = this._requests[queuedRequestId];

      if (!queuedRequestConfig) {
        continue;
      }

      await this._handleRequest(queuedRequestConfig);
    }

    this._executing = false;
  }

  _getRequestId() {
    return String(++this._requestId);
  }

  async _handleRequest({ request, onExecuted }) {
    try {
      const res = await request();
      onExecuted(res);
    } catch (err) {
      console.error(err);
    }
  }
}

/** Test Solution */

const mockRequestGeneratorFactory = () => {
  let requestNum = 0;

  return (time) => {
    let currentRequestNum = ++requestNum;

    return () => {
      console.log(`Request ${currentRequestNum} starting...`);

      return new Promise((resolve) =>
        setTimeout(() => {
          resolve(`Request ${currentRequestNum} done!`);
        }, time)
      );
    };
  };
};

const generateMockRequest = mockRequestGeneratorFactory();

// Takes 5 seconds to resolve.
const mockRequest1 = generateMockRequest(5000);
// Takes 1 second to resolve.
const mockRequest2 = generateMockRequest(1000);
// Takes 2 seconds to resolve.
const mockRequest3 = generateMockRequest(2000);

/**
 * Expected log:
 *
 * Request 1 starting...
 * Request 1 done!
 * Request 3 starting...
 * Request 3 done!
 */

const rq = new RequestQueue();

rq.enqueue(mockRequest1, console.log);
const id1 = rq.enqueue(mockRequest2, console.log);
rq.enqueue(mockRequest3, console.log);

rq.processNext();
rq.cancel(id1);
rq.processNext();

setTimeout(() => {
  rq.processNext();
}, 4000);

console.log('hello friend');
