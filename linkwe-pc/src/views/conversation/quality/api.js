import request from '@/utils/request'
const service = window.lwConfig.services.system + window.lwConfig.services.wecom

// 列表
export function getList(data) {
  return request({
    url: service + '/qi/list',
    method: 'get',
    params: data
  })
}

// 新增
export function addQuality(data) {
  return request({
    url: service + '/qi/add',
    method: 'post',
    data
  })
}

// 编辑
export function editQuality(id, data) {
  return request({
    url: service + '/qi/update/' + id,
    method: 'put',
    data
  })
}

// 删除
export function deleteQuality(id) {
  return request({
    url: service + '/qi/del/' + id,
    method: 'delete'
  })
}

// 详情
export function detailQuality(id) {
  return request({
    url: service + '/qi/get/' + id
  })
}

// 周报列表 待调
export function qualityWeeklyTatble(data) {
  return request({
    url: service + '/qi/list',
    method: 'get',
    params: data
  })
}

// 质检统计 看板
export function statisticData(id) {
  return request({
    url: service + '/qi/statistics/view/' + id
  })
}

// 质检统计 质检记录
export function statisticTable(id, data) {
  return request({
    url: service + '/qi/statistics/table/' + id,
    params: data
  })
}

// 质检统计 消息记录
export function statisticRecordList(data) {
  return request({
    url: service + '/qi/statistics/table/msg',
    params: data
  })
}
