export const formConf = {
  formRef: 'elForm',
  formModel: 'formData',
  size: 'default',
  labelPosition: 'right',
  labelWidth: 100,
  formRules: 'rules',
  gutter: 15,
  disabled: false,
  span: 24,
  formBtns: true,
}

export const inputComponents = [
  {
    formCodeId: 0,
    label: '文字描述',
    tag: 'el-input',
    tagIcon: 'textarea',
    type: 'textarea',
    placeholder: '请在右侧控件设置中输入需要显示的文字描述',
    defaultValue: undefined,
    span: 24,
    labelWidth: null,
    autosize: {
      minRows: 4,
      maxRows: 4,
    },
    style: { width: '100%' },
    maxlength: null,
    'show-word-limit': true,
    readonly: true,
    disabled: false,
    required: true,
    regList: [],
    changeTag: true,
  },

  {
    formCodeId: 1,
    label: '图片展示',
    tag: 'el-image',
    tagIcon: 'color',
    defaultValue: undefined,
    span: 24,
    labelWidth: null,
    style: {},
    disabled: false,
    filterable: false,
    fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
    src: '',
    regList: [],
    changeTag: true,
  },
  {
    formCodeId: 2,
    label: '单行文本',
    //文字说明
    captions: '',
    tag: 'el-input',
    tagIcon: 'input',
    placeholder: '请输入',
    defaultValue: undefined,
    span: 24,
    labelWidth: null,
    style: { width: '100%' },
    clearable: true,
    prepend: '',
    append: '',
    'prefix-icon': '',
    'suffix-icon': '',
    maxlength: null,
    'show-word-limit': true,
    readonly: false,
    disabled: false,
    required: true,
    regList: [],
    changeTag: true,
  },
  {
    formCodeId: 3,
    label: '多行文本',
    tag: 'el-input',
    tagIcon: 'textarea',
    type: 'textarea',
    placeholder: '请输入',
    defaultValue: undefined,
    span: 24,
    labelWidth: null,
    autosize: {
      minRows: 4,
      maxRows: 4,
    },
    style: { width: '100%' },
    maxlength: null,
    'show-word-limit': true,
    readonly: false,
    disabled: false,
    required: true,
    regList: [],
    changeTag: true,
  },
  {
    formCodeId: 4,
    label: '数字',
    //文字说明
    captions: '',
    //最大值
    max: 999999999,
    min: null,
    //单位
    unit: '',
    //精度
    precision: 2,
    type: 'number',
    tag: 'el-input',
    tagIcon: 'input',
    placeholder: '请输入数字',
    style: {},
    defaultValue: undefined,
    span: 24,
    labelWidth: null,
    clearable: true,
    prepend: '',
    append: '',
    'prefix-icon': '',
    'suffix-icon': '',
    'show-word-limit': true,
    readonly: false,
    disabled: false,
    required: true,
    regList: [],
    changeTag: true,
  },

  {
    formCodeId: 5,
    layout: 'colFormItem',
    tagIcon: 'phone',
    label: '手机号',
    //文字说明
    captions: '',
    formId: 6,
    tag: 'el-input',
    placeholder: '请输入手机号',
    defaultValue: '',
    span: 24,
    style: { width: '100%' },
    clearable: true,
    prepend: '',
    append: '',
    'prefix-icon': '',
    'suffix-icon': '',
    maxlength: 11,
    'show-word-limit': true,
    change: 'change',
    readonly: false,
    disabled: false,
    required: true,
    changeTag: true,
    regList: [
      {
        pattern: '/^1(3|4|5|7|8|9)\\d{9}$/',
        message: '手机号格式错误',
      },
    ],
  },
  {
    formCodeId: 6,
    label: '下拉选择',
    tag: 'el-select',
    tagIcon: 'select',
    placeholder: '请选择',
    defaultValue: undefined,
    span: 24,
    labelWidth: null,
    style: { width: '100%' },
    clearable: true,
    disabled: false,
    required: true,
    filterable: false,
    options: [],
    regList: [],
    changeTag: true,
  },
  {
    formCodeId: 7,
    label: '级联选择',
    tag: 'el-cascader',
    tagIcon: 'cascader',
    placeholder: '请选择',
    defaultValue: [],
    span: 24,
    labelWidth: null,
    style: { width: '100%' },
    'show-all-levels': true,
    disabled: false,
    clearable: true,
    filterable: false,
    required: true,
    options: [],
    //静态数据
    dataType: 'static',
    labelKey: 'label',
    valueKey: 'value',
    childrenKey: 'children',
    separator: '/',
    regList: [],
    changeTag: true,
  },
  {
    formCodeId: 8,
    label: '选项组',
    tag: 'el-radio-group',
    tagIcon: 'radio',
    defaultValue: undefined,
    //是否多选
    multiple: false,
    span: 24,
    labelWidth: null,
    style: {},
    optionType: 'default',
    border: false,
    size: 'default',
    maxZ: null,
    disabled: false,
    required: true,
    options: [],
    regList: [],
    changeTag: true,
  },
  {
    formCodeId: 9,
    label: '省市联动',
    tag: 'el-cascader',
    tagIcon: 'cascader',
    placeholder: '请选择省市区',
    defaultValue: [],
    span: 24,
    labelWidth: null,
    style: { width: '100%' },
    ssq: '',
    options: [],
    props: {
      value: 'id',
      label: 'name',
    },
    'show-all-levels': true,
    disabled: false,
    clearable: true,
    filterable: false,
    required: true,
    //静态数据
    dataType: 'static',
    labelKey: 'label',
    valueKey: 'value',
    childrenKey: 'children',
    separator: '/',
    regList: [],
    changeTag: true,
  },
  {
    formCodeId: 10,
    label: '日期时间',
    tag: 'el-date-picker',
    tagIcon: 'date-range',
    placeholder: '请选择',
    defaultValue: undefined,
    span: 24,
    labelWidth: null,
    style: { width: '100%' },
    type: 'datetime',
    disabled: false,
    clearable: true,
    required: true,
    readonly: false,
    regList: [],
    format: 'YYYY-MM-DD HH:mm:ss',
    changeTag: true,
  },
  {
    formCodeId: 11,
    label: '姓名',
    //文字说明
    captions: '',
    tag: 'el-input',
    tagIcon: 'input',
    layout: 'colFormItem',
    placeholder: '请输入你的名字',
    defaultValue: undefined,
    span: 24,
    labelWidth: null,
    style: { width: '100%' },
    clearable: true,
    prepend: '',
    append: '',
    'prefix-icon': '',
    'suffix-icon': '',
    maxlength: null,
    'show-word-limit': true,
    readonly: false,
    disabled: false,
    required: true,
    regList: [],
    changeTag: true,
  },
]

export const selectComponents = [
  {
    label: '下拉选择',
    tag: 'el-select',
    tagIcon: 'select',
    placeholder: '请选择',
    defaultValue: undefined,
    span: 24,
    labelWidth: null,
    style: { width: '100%' },
    clearable: true,
    disabled: false,
    required: true,
    filterable: false,
    multiple: false,
    options: [
      {
        label: '选项一',
        value: 1,
      },
      {
        label: '选项二',
        value: 2,
      },
    ],
    regList: [],
    changeTag: true,
  },

  {
    label: '单选框组',
    tag: 'el-radio-group',
    tagIcon: 'radio',
    defaultValue: undefined,
    span: 24,
    labelWidth: null,
    style: {},
    optionType: 'default',
    border: false,
    size: 'default',
    disabled: false,
    required: true,
    options: [
      {
        label: '选项一',
        value: 1,
      },
      {
        label: '选项二',
        value: 2,
      },
    ],
    regList: [],
    changeTag: true,
  },
  {
    label: '多选框组',
    tag: 'el-checkbox-group',
    tagIcon: 'checkbox',
    defaultValue: [],
    span: 24,
    labelWidth: null,
    style: {},
    optionType: 'default',
    border: false,
    size: 'default',
    disabled: false,
    required: true,
    multiple: false,
    options: [
      {
        label: '选项一',
        value: 1,
      },
      {
        label: '选项二',
        value: 2,
      },
    ],
    regList: [],
    changeTag: true,
  },
  {
    label: '开关',
    tag: 'el-switch',
    tagIcon: 'switch',
    defaultValue: false,
    span: 24,
    labelWidth: null,
    style: {},
    disabled: false,
    required: true,
    'active-text': '',
    'inactive-text': '',
    'active-color': null,
    'inactive-color': null,
    'active-value': true,
    'inactive-value': false,
    regList: [],
    changeTag: true,
  },
  {
    label: '滑块',
    tag: 'el-slider',
    tagIcon: 'slider',
    defaultValue: null,
    span: 24,
    labelWidth: null,
    disabled: false,
    required: true,
    min: 0,
    max: 100,
    step: 1,
    'show-stops': false,
    range: false,
    regList: [],
    changeTag: true,
  },
  {
    label: '时间选择',
    tag: 'el-time-picker',
    tagIcon: 'time',
    placeholder: '请选择',
    defaultValue: null,
    span: 24,
    labelWidth: null,
    style: { width: '100%' },
    disabled: false,
    clearable: true,
    required: true,
    'picker-options': {
      selectableRange: '00:00:00-23:59:59',
    },
    format: 'HH:mm:ss',
    'value-format': 'HH:mm:ss',
    regList: [],
    changeTag: true,
  },
  {
    label: '时间范围',
    tag: 'el-time-picker',
    tagIcon: 'time-range',
    defaultValue: null,
    span: 24,
    labelWidth: null,
    style: { width: '100%' },
    disabled: false,
    clearable: true,
    required: true,
    'is-range': true,
    'range-separator': '至',
    'start-placeholder': '开始时间',
    'end-placeholder': '结束时间',
    format: 'HH:mm:ss',
    'value-format': 'HH:mm:ss',
    regList: [],
    changeTag: true,
  },

  {
    label: '日期范围',
    tag: 'el-date-picker',
    tagIcon: 'date-range',
    defaultValue: null,
    span: 24,
    labelWidth: null,
    style: { width: '100%' },
    type: 'daterange',
    'range-separator': '至',
    'start-placeholder': '开始日期',
    'end-placeholder': '结束日期',
    disabled: false,
    clearable: true,
    required: true,
    format: 'YYYY-MM-DD',
    // 'value-format': 'YYYY-MM-DD',
    readonly: false,
    regList: [],
    changeTag: true,
  },

  {
    label: '颜色选择',
    tag: 'el-color-picker',
    tagIcon: 'color',
    defaultValue: null,
    labelWidth: null,
    'show-alpha': false,
    'color-format': '',
    disabled: false,
    required: true,
    size: 'default',
    regList: [],
    changeTag: true,
  },
  {
    label: '上传',
    tag: 'el-upload',
    tagIcon: 'upload',
    action: 'https://jsonplaceholder.typicode.com/posts/',
    defaultValue: null,
    labelWidth: null,
    disabled: false,
    required: true,
    accept: '',
    name: 'file',
    'auto-upload': true,
    showTip: false,
    buttonText: '点击上传',
    fileSize: 2,
    sizeUnit: 'MB',
    'list-type': 'text',
    multiple: false,
    regList: [],
    changeTag: true,
  },
]

export const layoutComponents = [
  {
    layout: 'rowFormItem',
    tagIcon: 'row',
    type: 'default',
    justify: 'start',
    align: 'top',
    label: '行容器',
    layoutTree: true,
    children: [],
  },
]

// 组件rule的触发方式，无触发方式的组件不生成rule
export const trigger = {
  'el-input': 'blur',
  'el-input-number': 'blur',
  'el-select': 'change',
  'el-radio-group': 'change',
  'el-checkbox-group': 'change',
  'el-cascader': 'change',
  'el-time-picker': 'change',
  'el-date-picker': 'change',
  'el-rate': 'change',
}
