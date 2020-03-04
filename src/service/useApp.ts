import create, { GetState, SetState, State } from './createState'
import Pooldao, { NodeInfo, OperatorInfo } from './Pooldao'

export interface AppState extends State {
  provider: Pooldao
  currentAccount: string
  nodeOverview: {
    participate: number
    run: number
    end: number
    pending: number
  }
  total: {
    deposit: number
    profit: number
    rate: number
  }
  operator: OperatorInfo[]
  myNodeList: NodeInfo[]
  allNodeList: NodeInfo[]
  ethBalance: string
  poolEthBalance: string
}

export const [useApp, useAppApi] = create<AppState>(
  (set: SetState<AppState>, get: GetState<AppState>): AppState => ({
    provider: new Pooldao(),
    currentAccount: '',
    ethBalance: '',
    poolEthBalance: '',
    nodeOverview: {
      participate: 0,
      run: 0,
      end: 0,
      pending: 0,
    },
    total: {
      deposit: 0,
      profit: 0,
      rate: 0,
    },
    operator: [],
    myNodeList: [],
    allNodeList: [],
  })
)

export default useApp
