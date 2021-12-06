declare module '*.module.css' {
  interface CSSModule {
    [key: string]: string
  }

  const content: CSSModule;
  export default content;
}
