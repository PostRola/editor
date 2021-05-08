import { SVGIcon, SVGIconProps } from './Icon';

export type IconProps = Pick<SVGIconProps, 'className'>;


export function Attachment(props: IconProps) {
  return (
    <SVGIcon {...props} viewBox='0 0 24 24'>
      <path fill='none' d='M0 0h24v24H0z' />
      <path
        d='M14.828 7.757l-5.656 5.657a1 1 0 1 0 1.414 1.414l5.657-5.656A3 3 0 1 0 12 4.929l-5.657 5.657a5 5 0 1 0 7.071 7.07L19.071 12l1.414 1.414-5.657 5.657a7 7 0 1 1-9.9-9.9l5.658-5.656a5 5 0 0 1 7.07 7.07L12 16.244A3 3 0 1 1 7.757 12l5.657-5.657 1.414 1.414z' />
    </SVGIcon>
  )
}


export function Bold(props: IconProps) {
  return (
    <SVGIcon {...props} viewBox='0 0 24 24'>
      <path fill='none' d='M0 0h24v24H0z' />
      <path
        d='M8 11h4.5a2.5 2.5 0 1 0 0-5H8v5zm10 4.5a4.5 4.5 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.498 4.498 0 0 1 18 15.5zM8 13v5h5.5a2.5 2.5 0 1 0 0-5H8z' />
    </SVGIcon>
  );
}


export function CodeView(props: IconProps) {
  return (
    <SVGIcon {...props} viewBox='0 0 24 24'>
      <path fill='none' d='M0 0h24v24H0z'/>
      <path d='M16.95 8.464l1.414-1.414 4.95 4.95-4.95 4.95-1.414-1.414L20.485 12 16.95 8.464zm-9.9 0L3.515 12l3.535 3.536-1.414 1.414L.686 12l4.95-4.95L7.05 8.464z'/>
    </SVGIcon>
  );
}


export function Image(props: IconProps) {
  return (
    <SVGIcon {...props} viewBox='0 0 24 24'>
      <path fill='none' d='M0 0h24v24H0z'/>
      <path d='M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z' />
    </SVGIcon>
  );
}


export function Italic(props: IconProps) {
  return (
    <SVGIcon {...props} viewBox='0 0 24 24'>
      <path fill='none' d='M0 0h24v24H0z'/>
      <path d='M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15z'/>
    </SVGIcon>
  );
}


export function Strikethrough(props: IconProps) {
  return (
    <SVGIcon {...props} viewBox='0 0 24 24'>
      <path fill='none' d='M0 0h24v24H0z' />
      <path d='M17.154 14c.23.516.346 1.09.346 1.72 0 1.342-.524 2.392-1.571 3.147C14.88 19.622 13.433 20 11.586 20c-1.64 0-3.263-.381-4.87-1.144V16.6c1.52.877 3.075 1.316 4.666 1.316 2.551 0 3.83-.732 3.839-2.197a2.21 2.21 0 0 0-.648-1.603l-.12-.117H3v-2h18v2h-3.846zm-4.078-3H7.629a4.086 4.086 0 0 1-.481-.522C6.716 9.92 6.5 9.246 6.5 8.452c0-1.236.466-2.287 1.397-3.153C8.83 4.433 10.271 4 12.222 4c1.471 0 2.879.328 4.222.984v2.152c-1.2-.687-2.515-1.03-3.946-1.03-2.48 0-3.719.782-3.719 2.346 0 .42.218.786.654 1.099.436.313.974.562 1.613.75.62.18 1.297.414 2.03.699z' />
    </SVGIcon>
  );
}


export function Underline(props: IconProps) {
  return (
    <SVGIcon {...props} viewBox='0 0 24 24'>
      <path fill='none' d='M0 0h24v24H0z'/>
      <path d='M8 3v9a4 4 0 1 0 8 0V3h2v9a6 6 0 1 1-12 0V3h2zM4 20h16v2H4v-2z' />
    </SVGIcon>
  );
}


export function H1(props: IconProps) {
  return (
    <SVGIcon {...props} viewBox='0 0 24 24'>
      <path fill='none' d='M0 0H24V24H0z'/>
      <path d='M13 20h-2v-7H4v7H2V4h2v7h7V4h2v16zm8-12v12h-2v-9.796l-2 .536V8.67L19.5 8H21z' />
    </SVGIcon>
  );
}


export function H2(props: IconProps) {
  return (
    <SVGIcon {...props} viewBox='0 0 24 24'>
      <path fill='none' d='M0 0H24V24H0z'/>
      <path d='M4 4v7h7V4h2v16h-2v-7H4v7H2V4h2zm14.5 4c2.071 0 3.75 1.679 3.75 3.75 0 .857-.288 1.648-.772 2.28l-.148.18L18.034 18H22v2h-7v-1.556l4.82-5.546c.268-.307.43-.709.43-1.148 0-.966-.784-1.75-1.75-1.75-.918 0-1.671.707-1.744 1.606l-.006.144h-2C14.75 9.679 16.429 8 18.5 8z'/>
    </SVGIcon>
  );
}


export function H3(props: IconProps) {
  return (
    <SVGIcon {...props} viewBox='0 0 24 24'>
      <path fill='none' d='M0 0H24V24H0z'/>
      <path d='M22 8l-.002 2-2.505 2.883c1.59.435 2.757 1.89 2.757 3.617 0 2.071-1.679 3.75-3.75 3.75-1.826 0-3.347-1.305-3.682-3.033l1.964-.382c.156.806.866 1.415 1.718 1.415.966 0 1.75-.784 1.75-1.75s-.784-1.75-1.75-1.75c-.286 0-.556.069-.794.19l-1.307-1.547L19.35 10H15V8h7zM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2z' />
    </SVGIcon>
  );
}


export function Link(props: IconProps) {
  return (
    <SVGIcon {...props} viewBox='0 0 24 24'>
      <path fill='none' d='M0 0h24v24H0z'/>
      <path d='M18.364 15.536L16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z' />
    </SVGIcon>
  );
}


export function LinkUnlink(props: IconProps) {
  return (
    <SVGIcon {...props} viewBox='0 0 24 24'>
      <path fill='none' d='M0 0h24v24H0z'/>
      <path d='M17.657 14.828l-1.414-1.414L17.657 12A4 4 0 1 0 12 6.343l-1.414 1.414-1.414-1.414 1.414-1.414a6 6 0 0 1 8.485 8.485l-1.414 1.414zm-2.829 2.829l-1.414 1.414a6 6 0 1 1-8.485-8.485l1.414-1.414 1.414 1.414L6.343 12A4 4 0 1 0 12 17.657l1.414-1.414 1.414 1.414zm0-9.9l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07zM5.775 2.293l1.932-.518L8.742 5.64l-1.931.518-1.036-3.864zm9.483 16.068l1.931-.518 1.036 3.864-1.932.518-1.035-3.864zM2.293 5.775l3.864 1.036-.518 1.931-3.864-1.035.518-1.932zm16.068 9.483l3.864 1.035-.518 1.932-3.864-1.036.518-1.931z'  />
    </SVGIcon>
  );
}


export function ListOrdered(props: IconProps) {
  return (
    <SVGIcon {...props} viewBox='0 0 24 24'>
      <path fill='none' d='M0 0h24v24H0z'/>
      <path d='M8 4h13v2H8V4zM5 3v3h1v1H3V6h1V4H3V3h2zM3 14v-2.5h2V11H3v-1h3v2.5H4v.5h2v1H3zm2 5.5H3v-1h2V18H3v-1h3v4H3v-1h2v-.5zM8 11h13v2H8v-2zm0 7h13v2H8v-2z' />
    </SVGIcon>
  );
}


export function ListUnordered(props: IconProps) {
  return (
    <SVGIcon {...props} viewBox='0 0 24 24'>
      <path fill='none' d='M0 0h24v24H0z'/>
      <path d='M8 4h13v2H8V4zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z' />
    </SVGIcon>
  );
}


export function SingleQuote(props: IconProps) {
  return (
    <SVGIcon {...props} viewBox='0 0 24 24'>
      <path fill='none' d='M0 0h24v24H0z'/>
      <path d='M9.583 17.321C8.553 16.227 8 15 8 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z' />
    </SVGIcon>
  );
}


export function DoubleQuote(props: IconProps) {
  return (
    <SVGIcon {...props} viewBox='0 0 24 24'>
      <path fill='none' d='M0 0h24v24H0z'/>
      <path d='M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z' />
    </SVGIcon>
  );
}


export function Template(props: IconProps) {
  return (
    <SVGIcon {...props} viewBox='0 0 24 24'>
    </SVGIcon>
  );
}
