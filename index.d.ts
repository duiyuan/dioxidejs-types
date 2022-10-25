declare namespace DioxideJS {
  export interface KeyValue<T = any> {
    [key: string]: T;
  }

  export type AllowedMethod =
    | "connected_address"
    | "request_connect_address"
    | "connection"
    | "network"
    | "is_locked"
    | "balance"
    | "send_transaction"
    | "selected_address"
    | "profile"
    | "compose_nft"
    | "decompose_nft"
    | "gasfee";
  export type AllowedEvent =
    | "connected_address_changed"
    | "suspend"
    | "connect"
    | "disconnect"
    | "network_changed"
    | "lock_status_changed"
    | "selected_address_changed"
    | "operation_timeout";

  export interface ProviderRpcError extends Error {
    message: string;
    code: number;
    data?: unknown;
  }

  export interface TxRequest<T = KeyValue<any>> {
    func: string;
    args: T;
    delegatee?: string;
  }

  export interface Provider {
    once(eventName: AllowedEvent, listener: (...args: any[]) => void): this;
    on(eventName: AllowedEvent, listener: (...args: any[]) => void): this;
    off(eventName: AllowedEvent, listener: (...args: any[]) => void): this;
    addListener(eventName: AllowedEvent, listener: (...args: any[]) => void): this;
    removeListener(eventName: AllowedEvent, listener: (...args: any[]) => void): this;
    removeAllListeners(event?: AllowedEvent): this;
    request<T = TxRequest, K = any>(params: { method: AllowedMethod; params?: T }): Promise<K>;
  }
}
