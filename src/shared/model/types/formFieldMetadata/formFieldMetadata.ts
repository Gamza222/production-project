export interface formFieldMetadata {
    label: string
    placeholder: string
    type: 'text' | 'number' | 'select'
    options?: Array<{ value: string; label: string }>
  }