// tests/smoke.js (versão simplificada e garantida)

import http from 'k6/http';
import { check } from 'k6';

export const options = {
vus: 1,
duration: '30s',
thresholds: {
  'http_req_failed': ['rate==0.0'],
},
};

export default function () {
const res = http.get('http://localhost:3000/health');

check(res, {
  'status da resposta é 200': (r) => r.status === 200,
});
}