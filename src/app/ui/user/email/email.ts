import config from '../../../../config.json';

/**
 * @description check whether the email suffix can be used for sign up
 * @param email email address
 * @returns true pass,false not pass
 */
export function Suffixes(email: string): boolean {
  const suffix = '@' + email.split('@')[1];
  const suffixes = config.suffixes;
  const index = suffixes.indexOf(suffix);
  return index != -1;
}

