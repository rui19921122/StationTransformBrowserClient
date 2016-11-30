declare module 'react-rte' {
  import * as React from 'react'
  class RichTextEditor extends React.Component<any,any> {
    public createValueFromString: ()=>any;
    public createEmptyValue: ()=>any;
  }
  export default RichTextEditor
}
