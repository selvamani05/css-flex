function NameList() {

/*     const persons = [
        {
            id: 1,
            class: 'Class',
            row: 5,
            skill: 'react'
        },
        {
            id: 2,
            class: 'Class',
            row: 8,
            skill: 'mongo'
        },
        {
            id: 3,
            class: 'Class',
            row: 8,
            skill: 'react'
        },
        {
            id: 22,
            class: 'Class',
            row: 8,
            skill: 'java'
        }
    ]
 

    const result = persons.filter(e=> e.skill==='react').map(person => (
        <li> {person.id} </li>
    ))

     */

     const jsonObjects = [
        {
            userId: 1,
            id: 1,
            title: 'quidem molestiae enim'
          },
          {
            userId: 1,
            id: 2,
            title: 'sunt qui excepturi placeat culpa'
          },
          {
            userId: 2,
            id: 3,
            title: 'omnis laborum odio'
          }
     ]

     
     const filteredItem = jsonObjects.filter(e=> 
         e.id === 3     ) .map (e => 
        <li>{e.title}</li>)
 

    return (
        <div>
         {filteredItem}
        
      </div>
    )
}

export default NameList