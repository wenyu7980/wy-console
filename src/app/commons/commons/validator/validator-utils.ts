import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

export class ValidatorUtils {
  /**
   * 必填
   * @param name 字段名
   * @param message 自定义提示消息
   */
  static required(name: string, message: string = ''): ValidatorFn {
    return (control: AbstractControl): any => {
      if (!control.value || control.value === '') {
        return {
          required: { 'zh-cn': message || `${name}为必填项` }
        };
      }
      return null;
    };
  }

  /**
   * 最小值
   * @param value 最小值
   * @param name 字段名
   * @param message 自定义提示消息
   */
  static min(value: number, name: string, message: string = ''): ValidatorFn {
    return control => {
      if (control.value && control.value < value) {
        return {
          required: { 'zh-cn': message || `${name}最小值为${value}` }
        };
      }
      return null;
    };
  }

  /**
   * 最大值
   * @param value 最大值
   * @param name 字段名
   * @param message 自定义提示消息
   */
  static max(value: number, name: string, message: string = ''): ValidatorFn {
    return control => {
      if (control.value && control.value > value) {
        return {
          required: { 'zh-cn': message || `${name}最大值为${value}` }
        };
      }
      return null;
    };
  }

  /**
   * 最小长度
   * @param value 最小长度
   * @param name 字段名
   * @param message 自定义提示消息
   */
  static minLength(value: number, name: string, message: string = ''): ValidatorFn {
    return control => {
      if (control.value && control.value.length < value) {
        return {
          required: { 'zh-cn': message || `${name}最小长度为${value}` }
        };
      }
      return null;
    };
  }

  /**
   * 最大长度
   * @param value 最大长度
   * @param name 字段名
   * @param message 自定义提示消息
   */
  static maxLength(value: number, name: string, message: string = ''): ValidatorFn {
    return control => {
      if (control.value && control.value.length > value) {
        return {
          required: { 'zh-cn': message || `${name}最大长度为${value}` }
        };
      }
      return null;
    };
  }

  /**
   * size范围
   * @param max 最大长度
   * @param min 最小长度
   * @param name 字段名
   * @param message 自定义提示消息
   */
  static size(max: number, min: number, name: string, message: string = ''): ValidatorFn {
    return control => {
      if (control.value && (control.value.length > max || control.value.length < min)) {
        return {
          required: { 'zh-cn': message || `${name}长度需要介于${max}与${min}之间` }
        };
      }
      return null;
    };
  }

  /**
   * 邮箱地址格式
   * @param name 字段名
   * @param message 自定义提示消息
   */
  static email(name: string, message: string = ''): ValidatorFn {
    return control => {
      if (Validators.email(control)) {
        return {
          required: { 'zh-cn': message || `${name}不是邮箱地址格式` }
        };
      }
      return null;
    };
  }

  /**
   * 正则校验
   * @param pattern 正则表达式
   * @param name 字段名
   * @param message 自定义提示消息
   */
  static pattern(pattern: string | RegExp, name: string, message: string = ''): ValidatorFn {
    return control => {
      if (Validators.email(control)) {
        return {
          required: { 'zh-cn': message || `${name}格式不正确` }
        };
      }
      return null;
    };
  }
}
