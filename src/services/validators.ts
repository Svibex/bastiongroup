const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const PHONE_REGEXP = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
const USER_NAME_REGEXP = /^[a-zA-ZА-Я-Ёа-яё\s]+$/;
const INN_REGEXP = /^[а-яА-ЯёЁa-zA-Z0-9\s]+$/;
const ID_REGEXP = /^[0-9]+$/;
const PRICE_REGEXP = /^(0|[1-9]\d*)(\.[0-9]{1,2})?$/;
const PRODUCT_NAME_REGEXP = /^[a-zA-ZА-Я-Ёа-яё0-9\s]+$/;
const GOST_REGEXP = /^[a-zA-ZА-Я-Ёа-яё0-9\s]+$/;
const IMG_REGEXP = /\.(jpe?g|png|gif|svg|bmp)$/i;

export const validatePrice = (price: string ): boolean => PRICE_REGEXP.test(price);

export const validateUserName = (name: string ): boolean => USER_NAME_REGEXP.test(name);

export const validatePhoneNumber = (phone: string ): boolean => PHONE_REGEXP.test(phone);

export const validateEmail = (email: string ): boolean => EMAIL_REGEXP.test(email);

export const validateFileExtension = (exts: string | File): boolean => {
   if (typeof exts === 'string') return IMG_REGEXP.test(exts)
   else return IMG_REGEXP.test(exts.name)
};

export const validateInn = (inn: string): boolean => INN_REGEXP.test(inn);

export const validateGost = (gost: string): boolean => GOST_REGEXP.test(gost);

export const validateId = (id: string): boolean => ID_REGEXP.test(id);

export const validateProductName = (name: string): boolean => PRODUCT_NAME_REGEXP.test(name);
