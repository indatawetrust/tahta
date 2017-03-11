const tahta = (opt) => {

  let canvas = null

  if (opt) {
    opt.size = opt.size ? opt.size : 100
  } else {
    opt = {}
    opt.size = opt.size ? opt.size : 100
  }

  if (typeof window !== 'undefined') {
  	canvas = document.createElement('canvas')
  } else {
    let Canvas = new require('canvas')

    canvas = new Canvas(opt.size, opt.size)
  }

  const c = canvas.getContext('2d'),
        uuid = () => 'xxxxxxxxxxxxxxxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8)
          return v.toString(16)
        }),
        arg = () => {

          let _ = [],
              i = opt.size

          for (let a=0;a<10;a++) {
            let k = Math.floor(Math.random()*opt.size/10)+10

            if (_.length) {
              if (_.reduce((a,b) => a+b) < opt.size && a === 9) {
                _.push(opt.size-_.reduce((a,b) => a+b))
              } else {
                _.push(k)
              }
            } else {
              _.push(k)
            }
         }

         return _

        }

  canvas.width = opt.size
  canvas.height = opt.size

  let id = opt.meta ? opt.meta.split('#')[0] : uuid()+"abcdef0123456789"[Math.floor(Math.random()*16)],
      arr = [],
      arr_arg = opt.meta ? opt.meta.split('#')[1] : arg()

  if (!opt.meta) {
    opt.meta = id+'#'+(arr_arg.toString().replace(/,/g, ''))
  } else {
    let stack_arg = []
    arr_arg = arr_arg.split('')
    while (arr_arg.length > 0) {
      stack_arg.push(parseInt(arr_arg.splice(0, 2).join('')))
    }
    arr_arg = stack_arg
  }

  id = id.split('')
  c.clearRect(0,0,opt.size,opt.size)

  while (id.length > 0) {
    arr.push('#'+id.splice(0, 3).join(''))
  }

  let w = 0

  for (let i=0;i<10;i++) {
    c.save()
    c.beginPath()
    let s = arr_arg.pop()
    c.globalAlpha = 0.75
    let color = arr.shift()
    c.fillStyle = color
    c.fillRect(w,0,s,opt.size)
    c.fillRect(0,w,opt.size,s)
    w+=s
    c.closePath()
    c.restore()
  }

  return {
    meta: opt.meta,
    dataURI: canvas.toDataURL()
  }

}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = tahta
} else {
  window.tahta = tahta
}
