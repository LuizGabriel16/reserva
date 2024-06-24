import multer from 'multer'
import path from 'path'

export default {
    storage: multer.diskStorage ({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, res,cb) => {
            const ext = path.extname(file.originalmente);
            const name = path.basename(file.originalmente, ext);
            cd(null, `${name}-${Date.now()}${ext}`)
        },
    })
}