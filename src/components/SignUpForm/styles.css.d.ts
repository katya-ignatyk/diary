declare namespace StylesCssNamespace {
  export interface IStylesCss {
    'signUp-form' : string;
    'signUp-form-group__input' : string;
    'signUp-form-group__input__invalid-feedback' : string;
    'signUp-form-group__label' : string;
    'signUp-form-group__wrapper' : string;
    'signUp-form__button' : string;
    'signUp-form__title' : string;
    'signUp-form__wrapper' : string;
    signUp__image : string;
    'signUp__image-wrapper' : string;
    signUp__wrapper : string;
  }
}

declare const StylesCssModule : StylesCssNamespace.IStylesCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals : StylesCssNamespace.IStylesCss;
};

export = StylesCssModule;
