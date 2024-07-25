import React from 'react'
import DcoumentHeader from './DcoumentHeader'
import DocumentInfo from './DocumentInfo'
import RichDocumentEditor from './RichDocumentEditor'

function DocumentEditorSection({params}) {

  return (
    <div>
        {/* Header  */}
            <DcoumentHeader/>

        {/* Document Info  */}
            <DocumentInfo params={params} />

        {/* Rich Text Editor  */}
            <RichDocumentEditor params={params} />
    </div>
  )
}

export default DocumentEditorSection