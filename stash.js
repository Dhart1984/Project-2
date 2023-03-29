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

    <div>
        <ul>
        <% if(goal.notes) { %>
            <% goal.notes.forEach(b=>{%>
                    <li><%=b.journal%> || <%=b.currentDate.Date.now()%> </li>
                <%})%>
                
            <% } else { %>
                <li>No notes available.</li>
            <% } %>
            </ul>
        </div>