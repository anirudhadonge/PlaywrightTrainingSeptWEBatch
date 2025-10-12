/**
 * xpath
 * css locator
 * 
 */

/**
 * xpath 
 * 
 * syntax : //<htmltag>[@<AttributeName>=<AttributeValue>]
 * 
 * 1. Parent to Child element : //<htmltag>[@<AttributeName>=<AttributeValue>]//<childhtmlTag>[@<AttributeName>=<AttributeValue>] e.g //div[@class='buttons_pzbO']//a[@href="/docs/intro"]
 * 2. Child To Parent element : //<htmlChildtag>[@<AttributeName>=<AttributeValue>]//parent::<ParentHtmlTag> e.g //a[@class='getStarted_Sjon']//parent::div
 * 3. Siblings
 *     - following-sibling : //<htmlChildtag>[@<AttributeName>=<AttributeValue>]//following-sibling::<sibling's Html Tag>
 *     - preceeding-sibling : /<htmlChildtag>[@<AttributeName>=<AttributeValue>]//preceding-sibling::<sibling's Html Tag>
 * 4. child to Ancestor: //<htmlChildtag>[@<AttributeName>=<AttributeValue>]//ancestor::<Html tag of ancestor>
 * 5. text(): you can use the label to find the element
 * 6. contains():  you have a partial value of the attribute //<html tag>[contains(@<attribute>,<attribute's partial Value>)]
 * 7. AND / OR : //input[@class="nameFld" and contains(@placeholder,'First')]
 * 
 */


/**
 * css locators
 * 1. class : '.'  <htmltag>.<class value>
 * 2. Id : '#' #<Id's Value>
 * 3. Other Attribute  :[<Attribute>=<Attribute value>]
 * 4. Parent to Child
 * 5. Element to Immediate Sibling
 */