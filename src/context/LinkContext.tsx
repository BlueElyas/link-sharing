import { useContext, createContext, ReactNode, useState, SetStateAction, ProviderProps } from "react"

type LinkProviderProps = {
    children: ReactNode
}

type linkProperties = {
    platform: string
    link: string
    id: number
}
 
type LinkContextValues = {
    saveLink: () => void
    setLinkItems: React.Dispatch<SetStateAction<linkProperties>>
    addNewLink: () => void
    newLink: boolean
    linkList:  linkProperties[]
    removeLink: (id: number) => void
}

const LinkContext = createContext({} as LinkContextValues)



export default function LinkProvider ( { children } : LinkProviderProps ) {
    const [linkItems, setLinkItems] = useState<linkProperties>( {
        platform: '',
        link: '',
        id: 0
    } )
    const [linkList, setLinkList] = useState<linkProperties[]> ( [ ] ) 
    const [newLink, setNewLink] = useState(false)

    const saveLink = () => {
        if (linkItems.platform.trim() && linkItems.link.trim()) {
            setLinkList((prevLinkList) => [...prevLinkList, linkItems])

            setLinkItems( {
                platform: '',
                link: '',
                id: 0
            } )
            
            setNewLink(false)
        }
    }
        
    const addNewLink = () => {
        setNewLink(p => !p)
    }

    const removeLink = (id : number) => {
        setLinkList(prevLinkList => prevLinkList.filter((item) => id !== item.id ))
    }

    console.log(linkList)

    return(
        <LinkContext.Provider value={ { saveLink, setLinkItems, addNewLink, newLink, linkList, removeLink } }>
            {children}
        </LinkContext.Provider>
    )
}

export function useLinkContext() {
    return useContext(LinkContext)
} 