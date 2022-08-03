import { Queries, queries, RenderOptions, RenderResult } from '.'

type CustomRenderOverloadWithGenerics<
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container
> = (
  ui: React.ReactElement,
  options: RenderOptions<Q, Container, BaseElement>
) => RenderResult<Q, Container, BaseElement>

type CustomRenderOverload = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => RenderResult

export type CustomRender = CustomRenderOverloadWithGenerics &
  CustomRenderOverload
