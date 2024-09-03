


export const deskStructure = (S, context) => 
    S.list()
        .title("Nettverk Studio")
        .items([
            S.listItem()
                .title("Home Page")
                .child(S.editor().schemaType("home").documentId("home")),
            S.divider(),

            ...S.documentTypeListItems().filter(
                (listItem) => !['media.tag', "home"].includes(listItem.getId()),
            ),
        ])
