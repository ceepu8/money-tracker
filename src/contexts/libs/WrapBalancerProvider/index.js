import { Provider } from 'react-wrap-balancer'

export default function WrapBalancerProvider({ children }) {
  return <Provider>{children}</Provider>
}
