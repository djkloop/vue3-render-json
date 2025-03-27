function renderSubTableFakeJson() {
  return {
    columns: [
      { type: 'seq', width: 70 },
      { field: 'name', title: '姓名', cellRender: { name: 'FormInput' } },
      { field: 'role', title: '性别' },
      { field: 'age', title: '年龄' },
    ],
    data: [
      { id: 1, name: 'John Brown', role: 'New York No. 1 Lake Park', age: 18 },
      { id: 2, name: 'Jim Green', role: 'London No. 1 Lake Park', age: 19 },
      { id: 3, name: 'Joe Black', role: 'Sidney No. 1 Lake Park', age: 20 },
    ],
  }
}

interface RenderFakeJsonItem {
  columns?: []
  data?: []
  type: string
  id: number
}

interface RenderFakeJson {
  data: RenderFakeJsonItem[]
}

export function useRenderFakeJson(min: number = 10, max: number = 50): RenderFakeJson {
  let id = 1
  const renderCountArea = [min, max]

  const formItemType = [
    'form-input',
    'form-input-number',
    'form-sub-table',
  ]
  const data = []
  const randomCount = Math.floor(Math.random() * (renderCountArea[1] - renderCountArea[0] + 1)) + renderCountArea[0]
  for (let i = 0; i < randomCount; i++) {
    const o = {}
    const t = formItemType[Math.floor(Math.random() * formItemType.length)]
    if (t === 'form-sub-table') {
      Object.assign(o, renderSubTableFakeJson())
    }
    data.push({
      id: id++,
      type: t,
      ...o,
    })
  }

  return {
    data,
  }
}
