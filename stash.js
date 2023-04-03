// function show(req, res) {
    //   Task.findById(req.params.id).then(
    //       function (task) {
    //           res.render('tasks/new', { task, title: 'Task Details' })
    //       })
    //       .catch(function (err) {
    //           console.log(err)
    //           res.redirect('/')
    //       })
    //   console.log("this function is doing something ")
    // }
    
    // router.get('/:id', taskCtrl.show)

    let bullet = Bullet.create(req.body)
    console.log(bullet.journal + " is the bullet journal here")
    goal.notes.push(bullet._id)
    return goal.save()

    <section class="results"><% tasks.forEach(t => { %>
        <div>Name:</div>
        <div>
            <%=t.taskName%>
        </div>
        <div>Due Date:</div>
        <div>
        <%=t.dueDate%> 
        </div>
        <div>Task Type:</div>
        <div>
            <%=t.taskType%>
        </div>

router.put('/:id', ensureLoggedIn, taskCtrl.update)

router.put('/:id', ensureLoggedIn, bulletCtrl.update)
<% t.dueDate.setMonth(t.dueDate.getMonth() - 1)%>


            
            

        

<% b.currentDate.setDate(b.currentDate.getDate() + 1) %>

<% t.dueDate.setDate(t.dueDate.getDate() + 1) %>

<% goal.dueDate.setDate(goal.dueDate.getDate()) %>

<% g.dueDate.setDate(g.dueDate.getDate() + 1) %>