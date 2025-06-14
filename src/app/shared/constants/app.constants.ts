export const MAX_NAME_LENGTH = 40;
export const MIN_PASSWORD_LENGTH = 8;
export const DEFAULT_API_ERROR = 'Error while making request';
export const ACCESS_TOKEN = 'token';
export const AUTH_USER = 'user';
export const TOAST_DELAY = 5000;

export const HTTP_ERRORS = Object.freeze({
  400: 'Bad Request',
  401: 'Un-Authorized',
  403: 'Forbidden',
  404: 'Not Found',
  409: 'Conflict',
  500: 'Internal Server Error',
});

export const TOAST_HEADERS = Object.freeze({
  SUCCESS: 'success',
  WARN: 'warn',
  ERROR: 'error',
});

export const DRIVER_STATUSES = [
  { type: 'APPROVED', value: 'Approved' },
  { type: 'SUSPENDED', value: 'Suspended' },
  { type: 'ACTION_REQUIRED', value: 'Action Required' },
  { type: 'IN_REVIEW', value: 'In Review' },
];

export const DRIVER_RIDE_STATUSES = [
  { type: 'AVAILABLE', value: 'Available' },
  { type: 'BOOKED', value: 'Booked' },
  { type: 'WAITING', value: 'Waiting' },
  { type: 'IN_RIDE', value: 'In Ride' },
];

export const ADMIN_REGIONS = [
  { type: 'PK', value: 'Pakistan' },
  { type: 'UK', value: 'United Kingdom' },
  { type: 'KSA', value: 'Saudi Arabia' },
  { type: 'USA', value: 'United States' },
];

export const VEHICLE_TYPES_ENUM = [
  { type: 'ECONOMY', value: 'Economy' },
  { type: 'BIKE', value: 'Bike' },
  { type: 'BUSINESS', value: 'Business' },
  { type: 'TOWE', value: 'Towe' },
  { type: 'AUTO', value: 'Auto' },
  { type: 'FOOD', value: 'Food' },
  { type: 'COURIER', value: 'Courier' },
  { type: 'KID', value: 'Kid' },
  { type: 'SHARE', value: 'Share' },
  { type: 'MINI', value: 'Mini' },
];

export const MODAL_ACTIONS = Object.freeze({
  CONFIRM: 'confirm',
  CLOSE: 'close',
});
