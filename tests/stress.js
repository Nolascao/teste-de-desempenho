import http from 'k6/http';
import { sleep } from 'k6';

const BASE_URL = 'http://localhost:3000';

export const options = {
stages: [
  { duration: '2m', target: 200 },
  { duration: '2m', target: 500 },
  { duration: '2m', target: 1000 },
  { duration: '1m', target: 0 },
],
};

export default function () {
http.get(`${BASE_URL}/checkout/crypto`);

sleep(1);
}