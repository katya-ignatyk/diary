declare namespace StylesCssNamespace {
  export interface IStylesCss {
    'form-button': string;
    'form-group': string;
    'form-image': string;
    'form-input': string;
    'form-title': string;
    'invalid-feedback': string;
    'signUp-form': string;
    'signUpForm-wrapper': string;
  }
}

declare const StylesCssModule: StylesCssNamespace.IStylesCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesCssNamespace.IStylesCss;
};

export = StylesCssModule;
