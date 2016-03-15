<% layout('./layouts/layout') -%>

<div class="col-sm-8">
  <% if(inventory.length <= 0){ %>
    <article class="col-sm-12 well">
      <header>
        <h2>Store Closed</h2>
      </header>
      <p>Sorry! No results where found.</p>
    </article>
  <% } else { %>
    <% inventory.forEach ( (item)=> { %>
      <div class="col-sm-6">
        <article class="well">
          <header>
            <h4><%= item.name %></h4>
          </header>
          <p><%= item.amount %></p>
          <p><%= item.id %></p>


          <div class="well">
            <div class="form-group row">
              <label class="col-sm-6 control-label" for="quantity">Quantity</label>
              <div class="col-sm-6">
                <input type="number" class="form-control" name="quantity">
              </div>
            </div>
          </div>

        </article>
      </div>
    <% }) %>
  <% } %>

</div>
