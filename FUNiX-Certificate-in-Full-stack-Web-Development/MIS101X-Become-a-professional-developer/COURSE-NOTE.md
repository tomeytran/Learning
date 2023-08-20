This course is all about mindset for aspiring developer that I've learned at first.
It takes from how to prepare to be developer, teamwork, Git/Gitlab, a bit of Kanban, SDLC, UML Diagram and some guide for writing CV and interview prep.
Most of the lectures are based on these Udemy Courses that I listed here:
https://udemy.com/course/it-for-beginners
https://udemy.com/course/teamwork
https://udemy.com/course/introduction-to-git-for-gitlab-projects
https://udemy.com/course/get-kanban-organised
https://udemy.com/course/process-mapping-process-flowcharts
https://udemy.com/course/uml-and-object-oriented-design-foundations

Below is my course note, include Vietnamese (really messy, I didn't try to capture all):


## Advance your tech skill

********************************A good developer + How to solve problem********************************

- Mistakes when learning: *unclear goals, copy blindly, no note-taking, no practice, bored, alone*
    
    → **Hacker Rank** (or Leetcode) to practice 
    
    - By language khi xong 1/2-2/3 lessons
    - By data structure → unsolved, basic/intermediate, easy
    - Sắp pv → prep kit, 3 months
    - Lấy certificate → xong 2.1 & 2.2, set Medium, 20-25b/mục
    - Khó dần = unit test, các sub domain
- Debugging skill: identify → find → fix → prevent + document
- Solve problem: Ask why → Break to smaller bits → Research → Pseudo code
    - Research more on Stack Overflow, Google, MDN…

**Teamwork**

- All about trust ← ice breaker + social events
- Conflict: always have every team → **Methods**: accomodate, avoid, force, collab, compromise
- Handle task:
    - Know the task scope, sự phù hợp, importance, context
    - Expected results
    - Responsibility, shared understanding (2 bên cùng hiểu và chịu trách nhiệm)
    - 1 nhân viên chỉ có 1 cấp trên
- Know the roles: *coordinator (điều phối hướng về goal), worker (support team), resource investigator (gắn kết team), plant/ideator, specialist, monitor, shaper (inspire team)*
- Effective meeting
    1. Luôn có brief, agenda, ít thành viên, scope & time (no late-er)
    2. Meeting recap 
    3. Ko add thêm gì ngoài agenda, nếu có bất chợt cần align cho đúng scope meeting
    4. Mọi người đều cảm giác được lắng nghe và tham gia (feel heard and joined)
    5. Cảm ơn kết thúc kèm actionable checklist

- ****************************Know to use Git & Gitlab****************************
    - Version Control System = software tool to keep track/merge/revert versions of code
    - Git = DVCS → distributed, dev can work anywhere to collab
    - Gitflow = workflow to use Git effectively, include stages, let say when coding an app
        
         0.  The Dev team use Git to manage and track changes to their codebase
        
        1. They **create a new Git repository** for the project & **set up the Gitflow** workflow, includes several branches for different stages
        2. Each dev **creates a local copy of the Git repo** on their computer ⇒ code independently.
        3. When coding they use Git commands to mark changes as "**modified”** *(kiểu chụp ảnh cap màn)***→** move to "**staged**" *(kiểu edit ảnh cap màn)* → finally "**commit**" *(kiểu lưu về album)* them to the Git repo 
        ⇒ helps track/maintain different versions of the code over time
            - Basically là 3 vùng làm việc (Local operations)
                - Working directory
                - Staging area
                - Git repository
                
                ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3c6d707f-7471-4b15-a3d8-91aeb7a12f72/Untitled.png)
                
        4. When a dev completes a feature or bug fix, they **create a new "feature branch"** in Git and **push their changes** to that branch 
        ⇒ helps **review & test changes** before they are merged into the main codebase.
        5. Once the feature or bug fix has been tested and approved, the dev **merges their changes** into the "develop" branch of the Git repository 
        ⇒ helps include changes in the next release of the software.
        6. When the software is ready for release, the team **creates a new "release branch"** in Git and tests the software on that branch. 
        7. Once the release is approved, it is **merged into the "master" branch of the Git repository** and **deployed to production.**
    
    - **Git workflow hoàn chỉnh** thì khác, *sẽ có tạo repo, config cấu hình, commit, staging/unstaging, commit a folder, delete file, tạo branch*
        
        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6e6a120f-2f63-4f3e-b8f6-bd73e598f3c1/Untitled.png)
        
        - **Git add:** Đưa code, thư mục hiện tại vào Staging Area, xác định phiên bản sẽ được commit trong lần commit tiếp theo.
        - **Git commit:** Cam kết phiên bản trong Staging Area.
        - **Git push:** Đưa code, thư mục từ Git directory (repository) đến repository từ xa (remote repository).
        - **Git fetch:** Nhận các tệp từ repository từ xa (remote repoitory) đến kho lưu trữ cục bộ (local repository) nhưng chưa đến working directory của bạn.
        - **Git merge:** Tải tệp được cập nhập từ kho lưu trữ cục bộ (local repository) đến working directory của bạn.
        - **Git pull:** Đây là sự kết hợp và rút ngắn của 2 câu lệnh trên. Nó sẽ đưa trực tiếp các tệp từ repository từ xa (remote repoitory) đến working directory của bạn.
        - **Git diff HEAD**: Nếu bạn thắc mắc tại sao phải sử dụng 2 lệnh git fetch, git merge trong khi có thể rút gọn thời gian bằng git pull, thì đó là vì có những lúc ta sẽ cần sử dụng git diff HEAD để kiểm tra sự khác biệt giữa ác tệp tồn tại trọng Working directory và các tệp nằm trong kho lưu trũ cục bộ (local repository).
        - **Git diff**: So sánh cho bạn biết sự khác biệt giữa các tệp trong Working directory và các tệp nằm trong Staging Area chuẩn bị được commit

********Kanban******** 

- 1940 - Taiichi Ohno
- Focus on project management visualization
- Principles
    1. Cadence (guồng) = Rhythm + Regular + Consistent
        - Focus on workflow & Iteratively improve
    2. Limit WIP → focus, **within 1 day or 2 hours,** culture of done, not “nearly done”
        - Swimlane = từ trên xuống (ưu tiên) + từ trái sang + task liên quan cùng 1 hàng (cách chia hàng thì tuỳ)
    
    <aside>
    💡 Max No. Tasks = 8-10
    
    </aside>
    

## Foundation of Software Development

********Software development life cycle (SDLC)********

- Why need: *can’t track when wrong, unsure if it will works at scale, wrong assumption*
    - Waterfall: *khó dự đoán thay đổi/vấn đề về sau, dễ hiểu sai khi lỡ build, lỗi tích hợp về sau*
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6fd04889-fba5-4634-887f-626d20e1d8d7/Untitled.png)
    
    - Xuất hiện các model khác khi vấn đề trên xảy ra: *V-model, Sashimi, Agile…*
        
        → Core idea: long process → short iterations, re v nhanh
        
        → to be fast and confident:
        
         *Continuous integration, Automated testing & deployment*
        
        ⇒ DevOps, *and cheaper quicker ways to learn like* *Lean Startup, Design thinking*
        
    

**Requirements:** 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6db2216d-0f24-4246-86be-ed14fc146faa/Untitled.png)

- SRS: more technical & precise, but still not solution
    - Requirement = user language
    - SRS = dev language
    - Từ Requirement ra SRS thường assume là dễ sai, cái khó là translation
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b55d97aa-baaa-4043-be79-42ba3004779a/Untitled.png)
    
- Non-functional requirement: = how code will perform the behaviors 
(Vs Functional requirement = what it will do, features will have)
    - Requirement liên quan Process: dùng platform hay language gì thì dùng cái đó
        - *VD: IBM tool cần database → dùng database của IBM là DB2*
    - Requirement liên quan Quality: security, usability, performance (tuy nhiên sẽ có tradeoffs)
        - *VD: fintech ưu tiên security nên phải có 2-factor authenticate → giảm usability*
- 3 types of req
    - Product: how the delivered product must behave (~feature: *encoding, encryption…*)
    - Organizational: defined by company, *like follow policy or specific coding style*
    - External: *like file format in doc or Europe standard (to store user data)*

- [WRSPM model](https://www.coursera.org/learn/software-processes/lecture/0TFI5/wrspm) → translate user requirement to SRS (capture the right thing)
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0e69702a-0a24-4bdf-9fac-e5fee6e16341/Untitled.png)
    

**Waterfall**

- Các model cho SD thì có 2 kiểu chia
    - Predictive vs Adaptive: 1 shot no changes vs Multiple shots with changes
    - Incremental vs Iterative: từng cái ghép vô vs từng bản cải thiện
- Waterfall là dạng predictive
    - Requirements cần rất solid
    - Team có kinh nghiệm build software tương tự
    - Từ Requirements sang design phải hoàn hảo
    
    ⇒ Rất nhanh predictive nhưng thiếu linh hoạt vs thay đổi và tốn time cho ver đầu, càng về bước sau thay đổi càng đội chi phí
    

**Software design**

- Thường từ khi có requirement thì có thể structure được architecture (BA vs Sofware Architect) r design chi tiết  (V-model )
- Vừa là process vừa là product của process
    
    ⇒ *A detailed description of the software that’s code-ready*
    
- Stages: Understand problem → Identify solutions → Describe solution abstractions → Repeat until design is expressed
    - Solution luôn > 1
- Stages of Design = 3 phần architecture & phần chi tiết: https://poe.com/s/FEUIRGWbsW1aJxeeF3ih
    - System architecture
    - Component specs (các thành phần có nghiệp vụ khác nhau)
    - Component interface specs (lên specs từng thành phần)
    - Component design (design các thành phần, chi tiết ra)
    - Data structure design (lên cấu trúc data để các tp works với nhau)
    - Algorithm design
    
    *⇒ Software design take abstract requirements and create detail ready to be developed*
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6fc76258-4165-4ac1-a39b-dcd8bbd7b6dd/Untitled.png)
    

Modularity

- 3 main goals
    - Decomposability
    - Composability
    - Ease of understanding
- How to modularize
    - Coupling: hiểu chi tiết mức độ phụ thuộc các module
    - Cohesion: mỗi module một nghiệp vụ duy nhất
    - Information hiding: ẩn info phức tạp
    - Data encapsulation: như trên, luồn dữ liệu được ẩn, user chỉ thấy interface và được đảm bảo UX

****************Testing**************** 

- Unit testing: tạo test cases mỗi module nhỏ
    - Đảm bảo test đúng module, lỗi ko đến từ module khác
- Integration testing: test các modules hoạt động với nhau
- Cơ chế của test gồm
    - Software under test hoặc cái được test, ko nhất thiết cả software, chia từng giai đoạn từ nhỏ đến lớn
        - Unit test
        - Module test: test tích hợp các unit
        - Subsystem test: test tích hợp các module
        - System test: hoàn chỉnh, từ alpha - beta - UAT
    - Test data kiểu như cho đề bài, requirement cho software under test
    - Test case gồm test data và expected output
    - Oracle: ~ required criteria orr guideline to evaluate *********(dạng user manual or requirement docs)*********
- Bug = failure (ko như assumption), error (sai code) or fault (kết quả thực)

**UML Diagram & draw.io**

Process flowchart → tool to assure quality, with visualized steps

- Why
    1. It helps document (the process to repeat)
    2. Visualization (> read long docs)
    3. Identify gaps & inefficiency →biết focus resources vào đầu
- What
    - Start or End → circle, và chỉ có 1 start & 1 end
    - Tasks → square, verb đơn giản (1 verb + 1 noun if possible)
    - Arrow for flow → đừng cố cross, phải thật clean và thẳng đừng cố vòng
    - Decisions → thoi, or gateway
    - Input → hình bình hành trỏ vào task
    - Output → hình bình hành trỏ từ task ra
    - Stored data → hình trụ mất nắp, place (database) or what (types of data stored with action)
    
    Multi level = mỗi cái lại gồm 1 process con, cứ thế chi tiết dần
    
    - Đánh số ví dụ cái to từ Start → 1 → 2 rồi ở map 1.1→1.3 thì đầu vẫn là start nhưng cuối là 2 hoặc 2.0
    - Max chỉ nên 3 levels: Level 0 thì 1.2 2.0, lên level 1 thì 1.1 2.1….
    - Level 0 ko nên có Decission hình thoi
- How
    1. Know the end goal → [Why](https://www.notion.so/MIS101x-Become-a-Professional-Developer-a7f78f63de4148af86b0d32951de34ee?pvs=21)
    2. The scope: *know the process to focus, boundaries, meet goal (vì sẽ có rất nhiều thứ xảy ra)*
    3. Tasks: *brainstorm vs stickynotes trước khi nhét vào chart, nó đi theo luồng user làm chứ kp người khác bảo thế*
    4. Identify process owners: *********check thực sự ai own task nào*********
    5. Org steps into sequence: ***nhớ để ý scope, ko nhồi***
    6. Make flowchart: ***chỉ nên chiếm 10% time phần này***
    7. Review (với người cần đọc): **********************check grammar, flow, naming, énure clear, adjust**********************
- Rule:
    - trên → xuống, trái → phải ⇒ *Start top-left, End bottom-right*
    - Và nên có swimlane (thường horizontal nhg vẫn có vertical) → dựa theo ai/cái gì phụ trách task nào

UML Diagram

- What
    - Unified Modeling Language → a set of guideline & diagram to communicate & document the system, for various industries
- Types
    - Use Cases → features, users *(actors use features)* & use cases *between them*
        
        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4d5317ea-c462-439d-ae9a-bce45949cffe/Untitled.png)
        
    - Class Diagram → classes, label theo UpperCamel, bên trong theo lowerCamel, gồm
        - attribute (noun)
        - operation(verb, hành động với nó)
        
        ⇒ format có thể theo ngôn ngữ dùng như Swift CSS tuỳ 
        
        → connect các classes với nhau, nhưng kp lúc nào cxung thành 1 thể thống nhất + 1 classcó thể join nhiều class
        
        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4f84b6e7-0787-4bf5-87e6-034553d70885/Untitled.png)
        
    - Story Mapping →

(+) = public → other projects can access

(-) = private → only objects within class can access

(#) = protected →  

(~) 

## Advanced knowledge

**Free Hosting**

- Tham khảo
    - Netlify: deploy từ gitlab or github với deploy pipeline & CI
    - GitLab Page/GitHub Page
    - Heroku → for PaaS, support NodeJS, Ruby, Java, PHP, Python… & PostgreSQL db
    - Firebase

********************************Shell & commands********************************

****Agile Basics****

= Week 1 coursera

- Agile mindset bao gồm những gì?
