import {ActionType} from "../action-types";

interface DepositAction{
    type: ActionType.DEPOSIT
    payload: number
}

interface WithdrawAction{
    type: ActionType.WITHDRAW
    payload: number
}

interface BankrupAction{
    type: ActionType.BANKRUPT
}

export type Action= DepositAction | WithdrawAction | BankrupAction
