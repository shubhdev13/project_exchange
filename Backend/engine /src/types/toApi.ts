import { Order } from "../trade/orderbook";

export const CREATE_ORDER = 'CREATE_ORDER';
export const CANCEL_ORDER = 'CANCEL_ORDER';
export const ON_RAMP = 'ON_RAMP';
export const GET_DEPTH = 'GET_DEPTH';

export type MessageToApi = {
    type: 'DEPTH';
    payload : {
        bids : [string,string][];
        asks : [string, string][];
    }
} | {
    type: 'ORER_PLACED';
    payload : {
        orderId : string;
        executedQty : string;
        fills : {
            price : string;
            qty: string;
            tradeID : string;
        }
    }
} | {
    type : 'ORDER_CANCELLED';
    payload : {
        orderID : string;
        executedQty : string;
        remainingQty : string;
    }
} | {
    type : 'OPEN_ORDERS',
    payload : Order[];
}

