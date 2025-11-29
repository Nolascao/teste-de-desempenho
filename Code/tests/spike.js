import http from 'k6/http';
import { sleep } from 'k6';

const BASE_URL = 'http://localhost:3000';

export const options = {
stages: [
  { duration: '30s', target: 10 },
  { duration: '10s', target: 300 },
  { duration: '1m', target: 300 },
  { duration: '10s', target: 10 },
  { duration: '30s', target: 10 },
],
};

export default function () {
http.get(`${BASE_URL}/checkout/simple`);

sleep(1);
}