type Options = {
  models: () => Promise<any>[];
  component: () => Promise<any>;
  LoadingComponent: () => JSX.Element;
}

declare function dynamicLoadable(options: Options): React.ReactNode;
declare class DynamicLoadable {
  setDefaultLoadingComponent(LoadingComponent: React.ReactNode): void;
}

declare let dl: typeof dynamicLoadable & DynamicLoadable;
export default dl;