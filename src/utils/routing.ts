import { RouteProps, RouteComponentProps } from 'react-router';
import { OmitFrom } from 'cb-react-micro-frontend/dist/types';

export const createRoutes = <TName extends string>(routes: Routes<TName>) =>
  routes;

export type Routes<TName extends string> = Record<TName, RouteInfo>;

export interface RouteInfo
  extends OmitFrom<RouteProps, 'children' | 'component' | 'render'> {
  path: string;
  factory: () => Promise<{
    default: React.ComponentType<RouteComponentProps>;
  }>;
}
