export interface Signup {
  username: string
  password: string
  password2: string
  email: string
  country: string
  number: string
}

export interface Country {
  key: string
  value: string
}

export const countries: Country[] = [
  {
    key: '🇺🇸 United States +1',
    value: '+1'
  },
  {
    key: '🇨🇳 China +86',
    value: '+86'
  },
  {
    key: '🇭🇰 HongKong,China +852',
    value: '+852'
  }
];
