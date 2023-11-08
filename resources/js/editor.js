import EditorJs from "@editorjs/editorjs"
import CodeTool from "@editorjs/"
import HeaderTool from "@editorjs/header"
import Image from "@editorjs/image"
import  Link from "@editorjs/link"

const editor = new EditorJs({
    tools: {
        code:CodeTool,
        header:HeaderTool,
        image:Image,
        link:Link
    },

    data:{},
})

