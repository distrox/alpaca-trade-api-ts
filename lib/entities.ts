export interface TradeActivity {
  activity_type: string
  cum_qty: string
  id: string
  leaves_qty: string
  price: string
  qty: string
  side: string
  symbol: string
  transaction_time: string
  order_id: string
  type: string
}

export interface NonTradeActivity {
  activity_type: string
  id: string
  date: string
  net_amount: string
  symbol: string
  qty: string
  per_share_amount: string
}

export interface AccountConfigurations {
  dtbp_check: string
  no_shorting: boolean
  suspend_trade: boolean
  trade_confirm_email: string
}

export interface Account {
  account_blocked: boolean
  account_number: string
  buying_power: string
  cash: string
  created_at: string
  currency: string
  daytrade_count: number
  daytrading_buying_power: string
  equity: string
  id: string
  initial_margin: string
  last_equity: string
  last_maintenance_margin: string
  long_market_value: string
  maintenance_margin: string
  multiplier: string
  pattern_day_trader: boolean
  portfolio_value: string
  regt_buying_power: string
  short_market_value: string
  shorting_enabled: boolean
  sma: string
  status: string
  trade_suspended_by_user: boolean
  trading_blocked: boolean
  transfers_blocked: boolean
}

export interface Asset {
  id: string
  class: string
  exchange: string
  symbol: string
  status: string
  tradable: boolean
  marginable: boolean
  shortable: boolean
  easy_to_borrow: boolean
}

export interface Bar {
  t: number
  o: number
  h: number
  l: number
  c: number
  v: number
}

export interface Calendar {
  date: string
  open: string
  close: string
}

export interface Clock {
  timestamp: string
  is_open: boolean
  next_open: string
  next_close: string
}

export interface LastQuoteResponse {
  status: string
  symbol: string
  last: LastQuote
}

export interface LastQuote {
  askprice: number
  asksize: number
  askexchange: number
  bidprice: number
  bidsize: number
  bidexchange: number
  timestamp: number
}

export interface LastTradeResponse {
  status: string
  symbol: string
  last: LastTrade
}

export interface LastTrade {
  price: number
  size: number
  exchange: number
  cond1: number
  cond2: number
  cond3: number
  cond4: number
  timestamp: number
}

export interface MarketDataResponse {
  status: string
  symbol: string
  last: LastTrade | LastQuote
}

export interface Order {
  id: string
  client_order_id: string
  created_at: string
  updated_at: string
  submitted_at: string
  filled_at: string
  expired_at: string
  canceled_at: string
  failed_at: string
  replaced_at: string
  replaced_by: string
  replaces: any
  asset_id: string
  symbol: string
  asset_class: string
  qty: string
  filled_qty: string
  type: string
  side: string
  time_in_force: string
  limit_price: string
  stop_price: string
  filled_avg_price: string
  status: string
  extended_hours: boolean
  legs: any
}

export interface Order {
  id: string
  client_order_id: string
  created_at: string
  updated_at: string
  submitted_at: string
  filled_at: string
  expired_at: string
  canceled_at: string
  failed_at: string
  replaced_at: string
  replaced_by: string
  replaces: any
  asset_id: string
  symbol: string
  asset_class: string
  qty: string
  filled_qty: string
  type: string
  side: string
  time_in_force: string
  limit_price: string
  stop_price: string
  filled_avg_price: string
  status: string
  extended_hours: boolean
  legs: any
}

export interface PortfolioHistory {
  timestamp: number[]
  equity: number[]
  profit_loss: number[]
  profit_loss_pct: number[]
  base_value: number
  timeframe: string
}

export interface Position {
  asset_id: string
  symbol: string
  exchange: string
  asset_class: string
  avg_entry_price: string
  qty: string
  side: string
  market_value: string
  cost_basis: string
  unrealized_pl: string
  unrealized_plpc: string
  unrealized_intraday_pl: string
  unrealized_intraday_plpc: string
  current_price: string
  lastday_price: string
  change_today: string
}

export interface Watchlist {
  account_id: string
  assets: Asset[]
  created_at: string
  id: string
  name: string
  updated_at: string
}

export interface AggregateMinute {
  ev: string
  T: string
  v: number
  av: number
  op: number
  vw: number
  o: number
  c: number
  h: number
  l: number
  a: number
  s: number
  e: number
}

export interface TradeUpdate {
  event: string
  price: string
  timestamp: string
  position_qty: string
  order: {
    id: string
    client_order_id: string
    asset_id: string
    symbol: string
    exchange: string
    asset_class: string
    side: string
  }
}

export interface AccountUpdate {
  id: string
  created_at: string
  updated_at: string
  deleted_at: any
  status: string
  currency: string
  cash: string
  cash_withdrawable: string
}

export interface Trade {
  ev: string
  T: string
  i: number
  x: number
  p: number
  s: number
  t: number
  c: number[]
  z: number
}

export interface Quote {
  ev: string
  T: string
  x: number
  p: number
  s: number
  X: number
  P: number
  S: number
  c: number[]
  t: number
}

export interface Message {
  action?: string
  stream?: string
  data: any
}

export enum WebSocketState {
  NOT_CONNECTED = 'not_connected',
  PENDING_AUTHORIZATION = 'pending_authorization',
  CONNECTED = 'connected',
  CLOSED_PENDING_RECONNECT = 'closed_pending_reconnect',
  CLOSED_NO_RECONNECT = 'closed_no_reconnect',
  CLOSED = 'closed',
}

export interface GetOrderParameters {
  order_id?: string
  client_order_id?: string
  nested?: boolean
}

export interface GetOrdersParameters {
  order_id?: string
  client_order_id?: string
  status?: string
  limit?: number
  after?: Date
  until?: Date
  direction?: string
  nested?: boolean
}

export interface PlaceOrderParameters {
  symbol: string
  qty: number
  side: 'buy' | 'sell'
  type: 'market' | 'limit' | 'stop' | 'stop_limit'
  time_in_force: 'day' | 'gtc' | 'opg' | 'cls' | 'ioc' | 'fok'
  limit_price?: number
  stop_price?: number
  extended_hours?: boolean
  client_order_id?: string
  order_class?: 'simple' | 'bracket' | 'oco' | 'oto'
  take_profit?: {
    limit_price: number
  }
  stop_loss?: {
    stop_price: number
    limit_price?: number
  }
}

export interface ReplaceOrderParameters {
  order_id: string
  qty?: number
  time_in_force?: string
  limit_price?: number
  stop_price?: number
  client_order_id?: string
}

export interface CancelOrderParameters {
  order_id: string
}

export interface GetPositionParameters {
  symbol: string
}

export interface ClosePositionParameters {
  symbol: string
}

export interface GetAssetParameters {
  asset_id_or_symbol: string
}

export interface GetAssetsParameters {
  status?: 'active' | 'inactive'
  asset_class?: string // i don't know where to find all asset classes
}

export interface GetWatchListParameters {
  uuid: string
}

export interface CreateWatchListParameters {
  name: string
  symbols?: string[]
}

export interface UpdateWatchListParameters {
  uuid: string
  name?: string
  symbols?: string[]
}

export interface AddToWatchListParameters {
  uuid: string
  symbol: string
}

export interface RemoveFromWatchListParameters {
  uuid: string
  symbol: string
}

export interface DeleteWatchListParameters {
  uuid: string
}

export interface GetCalendarParameters {
  start?: Date
  end?: Date
}

export interface UpdateAccountConfigurationsParameters {
  dtbp_check?: string
  no_shorting?: boolean
  suspend_trade?: boolean
  trade_confirm_email?: string
}

export interface GetAccountActivitiesParameters {
  activity_type: string
  date?: Date
  until?: Date
  after?: Date
  direction?: 'asc' | 'desc'
  page_size?: number
  page_token?: string
}

export interface GetPortfolioHistoryParameters {
  period?: string
  timeframe?: string
  date_end?: Date
  extended_hours?: boolean
}

export interface GetBarsParameters {
  timeframe?: string
  symbols: string[]
  limit?: number
  start?: Date
  end?: Date
  after?: Date
  until?: Date
}

export interface GetLastTradeParameters {
  symbol: string
}

export interface GetLastQuoteParameters {
  symbol: string
}
