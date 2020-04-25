import { History } from 'history';

declare global {
  interface Window {
    render: { [microFrontendName: string]: RenderMicroFrontend };
    unmount: { [microFrontendName: string]: UnmountMicroFrontend };
  }

  interface RenderMicroFrontend {
    (containerId: string, history: History): void;
  }

  interface UnmountMicroFrontend {
    (containerId: string): void;
  }
}
