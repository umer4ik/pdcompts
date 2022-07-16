import { Decorator } from '../src/Decorator'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
export const decorators = [
  Story => (
    <Decorator>
      <Story />
    </Decorator>
  )
]