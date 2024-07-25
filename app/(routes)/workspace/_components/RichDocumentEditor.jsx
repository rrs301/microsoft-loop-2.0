import React, { useEffect, useRef, useState } from 'react'
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Delimiter from '@editorjs/delimiter';
import Alert from 'editorjs-alert';
import List from "@editorjs/list";
import NestedList from '@editorjs/nested-list';
import Checklist from '@editorjs/checklist'
import Embed from '@editorjs/embed';
import SimpleImage from 'simple-image-editorjs';
import Table from '@editorjs/table'
import CodeTool from '@editorjs/code';
import { TextVariantTune } from '@editorjs/text-variant-tune';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '@/config/firebaseConfig';
import { useUser } from '@clerk/nextjs';
import Paragraph from '@editorjs/paragraph';


function RichDocumentEditor({ params }) {

  const ref = useRef();
  let editor;
  const { user } = useUser();
  const [documentOutput, setDocumentOutput] = useState([]);
  let isFetched = false;
  useEffect(() => {
    user && InitEditor();
  }, [user])

  // useEffect(() => {
  //   params && GetDocumentOutput();
  // }, [params])


  /**
   * Used to save Document
   */
  const SaveDocument = () => {
    console.log("UPDATE")
    ref.current.save().then(async (outputData) => {
      const docRef = doc(db, 'documentOutput', params?.documentid);
      console.log(outputData)
      await updateDoc(docRef, {
        output: outputData,
        editedBy: user?.primaryEmailAddress?.emailAddress
      })
    })
  }

  const GetDocumentOutput = () => {
    const unsubscribe = onSnapshot(doc(db, 'documentOutput', params?.documentid),
      (doc) => {
        console.log(doc.data()?.output)
        if (isFetched == false || doc.data()?.editedBy != user?.primaryEmailAddress?.emailAddress)
          doc.data()?.editedBy && editor?.render(doc.data()?.output);
        isFetched = true;
      })
  }

  const InitEditor = () => {
    if (!editor?.current) {
      editor = new EditorJS({
        onChange: (api, event) => {
           SaveDocument()
          //ref.current.save().then(async (outputData) => {console.log(outputData)})
        },
        onReady:()=>{
          GetDocumentOutput()
        },
        /**
         * Id of Element that should contain Editor instance
         */
        holder: 'editorjs',
        tools: {
          header: Header,
          delimiter: Delimiter,
          paragraph:Paragraph,
          alert: {
            class: Alert,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+A',
            config: {
              alertTypes: ['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'light', 'dark'],
              defaultType: 'primary',
              messagePlaceholder: 'Enter something',
            }
          },
          table: Table,
          list: {
            class: List,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+L',
            config: {
              defaultStyle: 'unordered'
            },
          },
          checklist: {
            class: Checklist,
            shortcut: 'CMD+SHIFT+C',
            inlineToolbar: true,
          },
          image: SimpleImage,
          code: {
            class: CodeTool,
            shortcut: 'CMD+SHIFT+P'
          },
          //   textVariant: TextVariantTune


        },

      });
      ref.current = editor;
    }
  }
  return (
    <div className='lg:-ml-80'>
      <div id='editorjs'></div>
    </div>
  )
}

export default RichDocumentEditor