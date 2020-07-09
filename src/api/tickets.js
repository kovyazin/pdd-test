import { request } from './request'

export const getTickets = () => request('/questions.json')