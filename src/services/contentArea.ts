export type ComponentType = "query" | "image" | "custom" | "response";

export interface DynamicComponent {
  id: string;
  type: ComponentType;
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props?: any;
}